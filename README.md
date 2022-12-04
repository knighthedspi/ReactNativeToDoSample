# TODO app
- React Native To Do sample
- Use Expo LocalAuthentication to authenticate user before adding/removing/updating TODO item

## Environment and third-party libraries
* expo: 47.0.8
* react: 18.1.0
* react-native: 0.70.5
* typescript: 4.6.3
* redux
* Expo LocalAuthentication
* Jest

### Structure

Source code is located in `src` directory

```sh
src
├── component
├── screen
├── store
├── test
```

* component
    * UI stateless components
* screen
    * UI statefull components
* store
    * Redux store and reducer
* test
    * test utilities    

### Getting started

Install inpendencies
```sh
yarn install
```

Run on iOS/Android
```sh
expo start
```

Test
```sh
npx jest
```
