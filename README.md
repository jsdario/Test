# daily-github
Hack github automatic rankings by commiting daily purposelessly the date

Let's see how far do we get https://github.com/iblancasa/GitHubRankingsSpain

##  1️⃣ 2️⃣ 3️⃣
[Sevilla](https://github.com/iblancasa/GitHubRankingsSpain/blob/master/andalucia/sevilla.md) 🇭🇰
[Andalucia](https://github.com/iblancasa/GitHubRankingsSpain/blob/master/andalucia/andalucia.md) 🇳🇬
[España](https://github.com/iblancasa/GitHubRankingsSpain/blob/master/spain-region.md) 🇪🇸

(Obviously the flags of Hong Kong and Nigeria are not those of Sevilla and Andalucia, but the colors do match!)


## Why?
For much that I like and support the idea of having a ranking of open source contributors in Spain (and worldwide) I created this repo with two main targets:

1. Gather the attention of mediocre recruiters
2. Fake activity and scale artificially in those rankings

Gathering brute statistics of primary data sources (e.g. # of commits) is a method that I don't find valuable as a way to actually measure cognitive work. To know more about the topic read my piece in Hackernoon about [Scope 🔬](https://hackernoon.com/measure-a-developers-impact-e2e18593ac79)

## How
Locally I use cron jobs on a Mac / Linux machine. But I also have a [Glitch.com](https://glitch.com/~jsdario-daily-github) 
that commit whenever I hit the server. To hit the server periodically I'm using https://cron-job.org/en/, which I find handy for a number of purposes, aside of procastinating.
