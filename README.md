## Usage

Initialize the `teamcowboy` module by calling it with your Team Cowboy API credentials, in return you'll get an initialized api module (exported as a JavaScript object) that you can then use to interact with the Team Cowboy API.

```
import teamcowboy from 'teamcowboy';

const teamcowboyApi = tc({
    privateKey: 'xxx',
    publicKey: 'xxx',
});
```

The `teamcowboy` JavaScript wrapper is divided by module after initialization. Each method accepts a single argument, which should be a JavaScript object with key/values that map directly to the parameters accepted by the Team Cowboy API for the specific method being called. Method calls will return a JavaScript promise.

```
const {
  auth,
  events,
  message,
  team,
  user,
} = teamcowboyApi;
```

Method calls will return a JavaScript promise. Here is an example that uses the `teamcowboy` library to get a user token, which then takes the token and makes another request to get teams for the user.

```
auth.getUserToken({
  username: 'my@email.com',
  password: 'p@ssw0rd',
}).then(res => {
  user.getTeams({ userToken: res.body.token})
    .then(resp => {console.log(resp)})
    .catch(err => {console.log(err)})
}).catch(err => {
  console.log(err);
});
```

## Team Cowboy method mapping.

### [Authentication Methods](https://api.teamcowboy.com/v1/docs/#_Toc372547915)

* [Auth_GetUserToken](https://api.teamcowboy.com/v1/docs/#_Toc372547916) -> `auth.getUserToken()`

### [Event Methods](https://api.teamcowboy.com/v1/docs/#_Toc372547917)
*Since event is a reserved word in JavaScript, this module has been named `events`*

* [Event_Get](https://api.teamcowboy.com/v1/docs/#_Toc372547918) -> `events.get()`
* [Event_GetAttendanceList](https://api.teamcowboy.com/v1/docs/#_Toc372547919) -> `events.getAttendanceList()`
* [Event_SaveRSVP](https://api.teamcowboy.com/v1/docs/#_Toc372547920) -> `events.saveRSVP()`

### [Message Methods](https://api.teamcowboy.com/v1/docs/#_Toc372547921)

* [Message_Get](https://api.teamcowboy.com/v1/docs/#_Toc372547922) -> `message.get()`
* [Message_Delete](https://api.teamcowboy.com/v1/docs/#_Toc372547923) -> `message.del()`
* [Message_Save](https://api.teamcowboy.com/v1/docs/#_Toc372547924) -> `message.save()`
* [MessageComment_Delete](https://api.teamcowboy.com/v1/docs/#_Toc372547925) -> `message.deleteComment()`
* [MessageComment_Add](https://api.teamcowboy.com/v1/docs/#_Toc372547926) -> `message.addComment()`

### [Team Methods](https://api.teamcowboy.com/v1/docs/#_Toc372547927)

* [Team_Get](https://api.teamcowboy.com/v1/docs/#_Toc372547928) -> `team.get()`
* [Team_GetEvents](https://api.teamcowboy.com/v1/docs/#_Toc372547929) -> `team.getEvents()`
* [Team_GetMessages](https://api.teamcowboy.com/v1/docs/#_Toc372547930) -> `team.getMessages()`
* [Team_GetRoster](https://api.teamcowboy.com/v1/docs/#_Toc372547931) -> `team.getRoster()`
* [Team_GetSeasons](https://api.teamcowboy.com/v1/docs/#_Toc372547932) -> `team.getSeasons()`

### [User Methods](https://api.teamcowboy.com/v1/docs/#_Toc372547936)

* [User_Get](https://api.teamcowboy.com/v1/docs/#_Toc372547937) -> `user.get()`
* [User_GetNextTeamEvent](https://api.teamcowboy.com/v1/docs/#_Toc372547938) -> `user.getNextTeamEvent()`
* [User_GetTeamEvents](https://api.teamcowboy.com/v1/docs/#_Toc372547939) -> `user.getTeamEvents()`
* [User_GetTeamMessages](https://api.teamcowboy.com/v1/docs/#_Toc372547940) -> `user.getTeamMessages()`
* [User_GetTeams](https://api.teamcowboy.com/v1/docs/#_Toc372547941) -> `user.getTeams()`
