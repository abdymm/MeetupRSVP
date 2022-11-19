import React, {useMemo, useState} from 'react';
import {View} from 'react-native';

import {ContentStyle, FlashList} from '@shopify/flash-list';
import {Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, RouteNames} from '@Navigations/Routes';

import styles from './styles';
import {User} from '@Types/User';
import UserItem from '@User/components/UserItem';
import useDebounce from '@Hooks/useDebounce';
import {USER_DATA} from '@Constants/Mocks';

const UserScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const [users, setUsers] = useState<User[]>(USER_DATA);
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query: string) => setSearchQuery(query);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filteredData = useMemo(
    () =>
      debouncedSearchQuery !== ''
        ? users.filter(
            item =>
              item.name
                .toLowerCase()
                .match(debouncedSearchQuery.toLowerCase()) ||
              item.locality
                .toLowerCase()
                .match(debouncedSearchQuery.toLowerCase()),
          )
        : users,
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
        <FlashList
          data={filteredData}
          contentContainerStyle={styles.list as ContentStyle}
          renderItem={({item}) => (
            <UserItem user={item} onPress={onShowDetail} />
          )}
          estimatedItemSize={100}
        />
      </View>
    </View>
  );
};

export default UserScreen;
