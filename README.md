# QuickFit

An exercise generator that allows you to keep track of workouts! This SPA allows users to add or select exercises along with some timing variations.

Fitness is the first step to greatness!

### Background

> “I really think a champion is defined not by their wins but by how they can recover when they fall." - Serena Williams

As a way to promote a healthy lifestyle, our goal is to create an easy to use application that provides a simple way to create an engaging exercise experience. This application aims to provide the ability to add custom movements or select from a list of basic movements, frame it within popular timing conventions, and provide visual, audio, and physical cues to the athlete.

Whether you are new to fitness or an experienced athlete, we strive to provide an easy to use interface that anyone can use right out of the box.

## Feature Functionality & MVP

- [x] Workout generator with timer and exercise selections
- [x] Three timing options
  * Counter
    - Duration
    - Toggle count up or down
    - IE. count up to 15mins
  * Interval
    - Rounds
    - Durations/Intervals
    - IE. 5 Rounds of 5 minutes of work
  * Tabata
    - Rounds
    - 20s Work, 10s Rest
    - IE. 8 Rounds of 20s work/10s rest, totaling 4mins
- [x] Visual and physical* cues to alert user of interface changes
- [x] User creation and login
- [x] An easy way to retrieve past workouts to monitor progress
- [x] Smooth and polished frontend for Apple App Store submission/acceptance

TBD*

## Future Features

- [ ] Social element to share workouts and progress
- [ ] Hardware access for added functionality and features


## Stack & Challenges

### Technologies
- [Django](https://www.djangoproject.com/) handles our backend: serving APIs, ensuring security, and handling auth.
- [OAuth](https://oauth.net/) was implemented to allow login through 3rd part platforms.
- [React Native](https://facebook.github.io/react-native/) is used for our frontend, mobile framework. Providing quick rendering and a smooth experience.
- [Expo.io](https://expo.io) is a tool that allows us to build and share native applications across iOS.
- [Axios](https://github.com/mzabriskie/axios) is a frontend library that streamlines HTTP requests to our API endpoints.
- [Moment.js](https://momentjs.com/) JavaScript time library used for displaying semantic dates for our users to track their workouts.



## Collaborators

### Team
[![Justin Austria][pic_ja]][git_ja]  | [![Chris Brickey][pic_cb]][git_cb] | [![Norris Kwan][pic_nk]][git_nk] | [![Kevin Shen][pic_ks]][git_ks] |
:------------------:|:-----------------------:|:-----------------------:|:-------------:|
[Justin Austria][git_ja] | [Chris Brickey][git_cb] | [Norris Kwan][git_nk] | [Kevin Shen][git_ks]

[git_ja]: https://github.com/Tulen
[git_cb]: https://github.com/chrisbrickey
[git_nk]: https://github.com/nrrs
[git_ks]: https://github.com/kevinshenyang07
[pic_ja]: https://avatars1.githubusercontent.com/u/11968940?v=4&s=200
[pic_cb]: https://avatars1.githubusercontent.com/u/7623023?v=4&s=200
[pic_nk]: https://avatars1.githubusercontent.com/u/425246?v=4&s=200
[pic_ks]: https://avatars1.githubusercontent.com/u/10000295?v=4&s=200
