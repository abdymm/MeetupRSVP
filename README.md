# Meetup RSVP

You have an upcoming React Native meetup where you need the participants to RSVP so
that you can prepare appropriate accommodations and transport facilities. The
participants can bring up to two guests along with them.

## Features

- Registration Form
- Guest list and it searchable
- Report

## Demo

Demo can be found here [Video Demo](https://drive.google.com/file/d/1EeiZbLuiobzpk1l3jyZRrRpUGDb_e97n/view?usp=sharing)


## Getting Started

### Installing

1. Clone the repo.
2. Install `$ yarn install` and `pod install`
3. Run iOS app with `$ yarn ios`
4. Run Android app with `$ yarn android`


### Testing

run `$ yarn test` and `$ yarn test:watch`


### Stack

- React Native
- UI Library: react-native-paper
- State Management: @rematch
- Responsive Design: react-native-size-matters
- Navigation: react-navigation 6
- Icons: react-native-vector-icons
- Chart: react-native-chart-kit
- List: @shopify/flash-list
- Import path management: Module Resolver

## Code Style Guide

### Indentation

Two spaces indentation

### Shortcut import with Babel (Modul Resolver)

All babel configuration can found on `babel.config.js` and `tsconfig.js` file.<br/>
After edit the babel, please clean expo cache using `$ yarn start --reset-cache`

```javascript
// Don't
import {SomeComponents} from '../../common/components';

// Do
import {SomeComponents} from '@Components';
```

### Pattern and Project Structure

i use **Domain Driven Design** in this app for project/folder structure, this can be apply for modular apps and this architecture can be optimised for large scale apps.

`/common` for all common/universal things that can be used everywhere in the project

`/feature` will consist each module/feature that include on the app
