# Hotree project

To check out my Hotree project, you have to clone or download my repository.
In your terminal go to project directory and type:

```
npm install
```
to download project dependencies. If installation is finished, to run project type:

```
npm run start
```
and in your browser navigate to
```
localhost:3000
```
1. App is responsive down to witdh of 320px.
2. Fields title, description, date and coordinator are mandatory.
3. Description field has 140 character limit.
4. There is a character counter below the description field.
5. Events can’t be created prior to the actual date.
6. Time field accept 12 hours time format but on the output, date is formatted as YYYY-MM-DDTHH:mm in 24 hours format
7. Field payment is mandatory in case of paid events, and fee input appears only when payment field is filled
8. Coordinator field has a default selected option with currently logged in user.
9. The email field should have an appropriate format.


Created event data structure:

```js
{
  title: string,
  description: string,
  category_id: number,
  paid_event: boolean,
  event_fee: number,
  reward: number,
  date: string, // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
  duration: number, // in seconds
  coordinator: {
    email: string,
    id: string,
  },
  phone: string,
}
```