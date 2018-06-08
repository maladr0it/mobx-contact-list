# Installation

> npm/yarn install

> npm/yarn start

Note that localStorage may be using the localhost domain. I'd recommend running in private browsing mode to avoid using other submissions' localStorage.

# Summary

It was my first time using mobx and Formik, as well as this particular project structure.

I tried my best to adhere to the project skeleton so that my code would be easily understandable by the engineer assessing it. It should be noted that I personally would have approached the project in a less verbose manner; given the small scope of the task.

No component libraries were used - I wanted to demonstrate an understanding of layout tools such as flexbox, as well as a general design sense.

I spent roughly 4 hours on this task over 2 afternoons.

Thanks so much for the opportunity to work on this task, I made a lot of design and structural decisions during my time working on it and hope that I can soon discuss them with you!

# Extra Features

## Form validaiton

Every contact must have a name, and if an email is provided its format is validated. Phone numbers due to their variety (e.g. '+', '-', '()'), are accepted as arbitrary strings. Leading whitespace for all fields is of course trimmed.

The form is smart about how it is validated - it won't tell you your input is wrong while you are still typing, leading to a better UX. The exact reason for your error is also specified next to each field in the event of one. As well as this, the submit button is disabled until the form has no errors.

## Filter by name

Your list of contacts is automatically sorted alphabetically, and can be searched by name. The search is of course case-insensitive. The search-box is not debounced due to it being an extremely cheap operation which improves the perceived responsivity of the app.

# Controvertial Choices

## Not all app-state is synced with localStorage

I believe form-data is ephemeral and should not persist between sessions unless the form itself is submitted. For this reason I elected to use Formik (boilerplate), which utilises local state for its forms.

In fact, only the actual list of contacts is synced with localStorage. I believe the name filter and the favourite toggle should be reset between sessions. Typically someone entering the app would want to see a complete list of their contacts, and not have to manually remove any applied filters once the page loads.

## I passed the contacts store down as a prop

The DOM tree is shallow, and passing down the store to lower components not only made errors easier to trace, but made for more readable code in my opinion.

## There are no tests

This is a simple assignment and given the time I had, I priorotised making a product with good UX and clean code over automated testing. Performing a full integration test takes only a few minutes given the app's limited features. Of course, if this were a larger scale, extensible project my priorities would shift.

## The app looks boring

I had limited time to work on the app, so I elected to style each component in very subtle ways to demonstrate that I was utilising CSS classes on a per-component basis. I feel that this should be enough to demonstrate that styling is straightforward and flexible, and it could be made beautiful with a couple more hours of work.

======

# React Test Task

Welcome to this test! The purpose of this exercise is to see your coding style and overall approach
to software engineering. In order to start the test please fork this repo,
and once you are done send a pull request with a detailed description.

### Challenge

Using React and Mobx you will have to build a contact managment application.  
A basic strucutre is offer to you but you can choose to ignore it and build your own.  
Keep in mind that everything we'll be judged. Good luck!

#### Tasks

- When "Add Contact" button is clicked, new contact card should appear with following fields:
  - Name
  - Phone
  - Email
  - Edit Button.
  - Favourite Button.
- Edit contact button should navigate to new screen that will allow editing of a contact and saving it.
- Favourite button should add contact to list of favourites.
- Create "Favourites" view that only displays favourited contacts.
- Save state in local storage.

#### Additionally

- Feel free to update existing code for the better if you think it needs to.
- You can add any modules that you required for the tasks or if you wanna add something.
