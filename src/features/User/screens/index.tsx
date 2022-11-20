import React, {useCallback, useMemo, useState, useEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Dispatch, RootState} from '@Stores';

import {ContentStyle, FlashList} from '@shopify/flash-list';
import {ActivityIndicator, Searchbar} from 'react-native-paper';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NavigationProps, RouteNames} from '@Navigations/Routes';

import styles from './styles';
import UserItem from '@User/components/UserItem';
import useDebounce from '@Hooks/useDebounce';
import {showToast, ToastType} from '@Utils/Notification';

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

const UserScreen = ({userState, fetch}: Props) => {
  const {data: users, loading, error} = userState;
  console.log('userState', userState);

  const navigation = useNavigation<NavigationProps>();

  const [searchQuery, setSearchQuery] = useState('');

  useFocusEffect(
    useCallback(() => {
      fetch();
    }, [fetch]),
  );

  useEffect(() => {
    if (error) {
      showToast(error, ToastType.Error);
    }
  }, [error]);

  const onChangeSearch = (query: string) => setSearchQuery(query);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const filteredData = useMemo(
    () =>
      users
        ? debouncedSearchQuery !== ''
          ? users.filter(
              item =>
                item.name
                  .toLowerCase()
                  .match(debouncedSearchQuery.toLowerCase()) ||
                item.locality
                  .toLowerCase()
                  .match(debouncedSearchQuery.toLowerCase()),
            )
          : users
        : [],
    [debouncedSearchQuery, users],
  );

  const onShowDetail = (id: string) => {
    navigation.navigate(RouteNames.UserDetail, {id});
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.listContainer}>
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator />
          </View>
        ) : (
          <FlashList
            data={filteredData}
            contentContainerStyle={styles.list as ContentStyle}
            renderItem={({item}) => (
              <UserItem user={item} onPress={onShowDetail} />
            )}
            estimatedItemSize={100}
          />
        )}
      </View>
    </View>
  );
};

const mapState = (state: RootState) => ({
  userState: state.user,
});
const mapDispatch = (dispatch: Dispatch) => ({
  fetch: () => dispatch.user.fetch(),
});
export default connect(mapState, mapDispatch)(UserScreen);
