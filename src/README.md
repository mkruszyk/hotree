# Welcome to Hotree project!

Thanks again for your interest in our job opening at Monterail. Your application caught our eye
and we'd like to invite you to participate in the selection process for this position. Are you in? :)

We have prepared a short task - implementation of a form.
The app is a simple social networking platform called **Hotree**. Your task is to create a
form which covers some of the main functionalities - creation and joining of events. Also, to
ease up the search and grouping, users should be able to assign a category for each event.
Besides, events in our Hotree app:

- can be free or paid
- have a coordinator in charge
- have rewards points which users can collect for attendance

**Specification:**

1. The form has validation
  - Fields `title`, `description`, `date` and `coordinator` are mandatory.
  - Description field has 140 character limit.
  - There is a character counter below the description field.
  - Events can’t be created prior to the actual date.
  - It is ok to use HTML5 `date` and `time` input despite lack of support in all browsers.
  - Time field should accept 12 hours time format but on the output, date should be formatted as `YYYY-MM-DDTHH:mm` in 24 hours format
  - Field `payment` is mandatory in case of paid events, and fee input appears only when payment
  field is filled
  - Select options are attached in JSON files.
  - Coordinator field has a default selected option with currently logged in user - there is a list of users in JSON files, and you can assume you are logged in user with id 3 and this option should be always on the top of the list. You can use native select input.
  - The `email` field should have an appropriate format.

2. After successful validation, the filled form should be closed and the `Success` information should appear. All the data from the form should be displayed using `console.log`.

The appropriate output data structure:

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

**IMPORTANT: Please, avoid CSS frameworks and chose JS framework wisely. We do not have any preferences between React, Vue or Angular 2+, but keep in mind - jQuery won’t be considered.**
Don’t forget about the readme file (you don’t want us to spend hours trying to run your solution,
right..?). You don't have to do any tasks that you weren't asked to solve, but there is always a
space for creativity. In case of any doubts, just go along with your experience and intuition.
Is your solution ready? Just zip up the app along with the repo and send the archive back to us!

## Designs:

### Form
![Form](designs/form.png)

### Form details
![Form details](designs/form_details.png)

### Form summary
![Form summary](designs/form_summary.png)

## Good luck!
