import React, {useMemo, useState} from 'react';
import {View} from 'react-native';

import {ContentStyle, FlashList} from '@shopify/flash-list';
import {Searchbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@Navigations/Routes';

import styles from './styles';
import {Profession} from '@Constants/Enum';
import {User} from '@Types/User';
import UserItem from '@User/components/UserItem';
import useDebounce from '@Hooks/useDebounce';

const DATA = [
  {
    name: 'Abdy Malik',
    dob: new Date(),
    profession: Profession.Employed,
    locality: 'Jakarta',
    numberOfGuest: 2,
    address:
      'Jl. Prof. Dr. Satrio Blok C-4 Kav. 16-17, KuninganTimur, Jakarta Selatan, 12950.',
  },
  {
    name: 'Malik Abdy',
    dob: new Date(),
    profession: Profession.Employed,
    locality: 'Bandung',
    numberOfGuest: 0,
    address:
      'Komp. Cikoneng Sakinah Regency No. 14, Kabupaten Bandung, Jawa Barat 40288',
  },
  {
    name: 'Mulky Abdy',
    dob: new Date(),
    profession: Profession.Student,
    locality: 'Dubai',
    numberOfGuest: 1,
    address:
      'Springdales School Dubai Al Quoz 4, Near Jumeirah University P.O. Box 115930. Dubai, United Arab Emirates.',
  },
];

const UserScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const [users, setUsers] = useState<User[]>(DATA);
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
          renderItem={({item}) => <UserItem user={item} />}
          estimatedItemSize={100}
        />
      </View>
    </View>
  );
};

export default UserScreen;
