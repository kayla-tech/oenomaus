# Oenomaus - An Unofficial API for Airbnb

## Overview
This Library wraps calls to Airbnb's API endpoints using v2 where possible (`HostAPI` mainly uses v2 for CRUD).

There are three main API classes:
  1. `PublicAPI` - All calls can be made with authentication
  1. `UserAPI` - Calls that an Airbnb user would do (requires auth)
  1. `HostAPI` - Create, update and delete listings (requires auth)

All methods return a `Promise<Object>`.

## Install
```bash
npm i oenomaus -S
```

### Usage
```javascript
import { PublicAPI, UserAPI, HostAPI  } from 'oenomaus';

const publicApi = new PublicAPI();
const userApi = new UserAPI(access_token);
const hostApi = new PublicAPI(access_token);
```

## Authorization

```javascript
import { PublicAPI } from 'oenomaus';

const api = new PublicAPI(); // <-- No access_token required
api.loginByEmail('some@email.com', 'password123')
  .then({ access_token } => {
    console.log(access_token);
  });
```

### Using the `access_token`

```javascript
import { HostAPI } from 'oenomaus';

const api = new HostAPI(access_token); // <-- access_token required
// all calls will be authenticated
api.createListing({
  name: 'Beautiful Apartment w Opera House views'
  city: 'Sydney',
  state: 'NSW',
  country_code: 'AU',
});
```

`UserAPI` and `HostAPI` both require the `access_token` to be passed to the constructor.

**NOTE:** API will return an `APIError` if you request authorization too often (as it's throttled by Airbnb); best to cache the `access_token`;

## Methods

Please see the Source Code and the tests for details. The source uses [Flow Type Checker](http://flowtype.org/) where possible which should help you understand the method options.

## Enums

To aid development, some of the Airbnb types have been declared using an [Enum](https://gist.github.com/xmlking/e86e4f15ec32b12c4689):

```javascript
import {
  PropertyTypes,
  RoomTypes,
  BedTypes,
  CommonAmenities,
  ExtraAmenities,
  HomeSafetyAmenities,
  HostPreferencesAmenities,
} from 'oenomaus';

console.log(PropertyTypes.HOUSE > PropertyTypes.APARTMENT);
// true
console.log(PropertyTypes.HOUSE !== PropertyTypes.APARTMENT);
// true
console.log(BedTypes.REAL_BED.name);
// REAL_BED
console.log(RoomTypes.ENTIRE_HOME.display);
// Entire home/apt
console.log(RoomTypes.ENTIRE_HOME.vale);
// entire_home
console.log(CommonAmenities.ESSENTIALS.value);
// 40
```

## Why Oenomaus?

We built this API as part of a fully featured Short Term Rental Management System; this system was code named: Spartacus. Oenomaus became one of the leaders of rebellious slaves during the Third Servile War (alongside Spartacus).

## Thanks

Thanks to @nrahnemoon who created the original [documentation](http://airbnbapi.org/) that this API is based.
