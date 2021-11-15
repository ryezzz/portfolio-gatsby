---
template: BlogPost
path: /portfolio/journal
date: 2021-11-15T20:59:01.777Z
title: Childhood Diary Analysis
metaDescription: An ongoing text analysis of my journal - Python & Tableau
exploration: true
thumbnail: /assets/screen-shot-2021-11-13-at-10.02.10-am.png
---
I've kept a personal journal since middle school and the text in it is very much "stream of consciousness" and really, really tough to read.\
\
I recently realized, "Hey! I know how to do some basic NLP and I can shrink this down to something digestible!"

There's a few challenges I ran into here. First, I had to take a large, disorganized text document (like 300,000 words) with various date/entry formats and turn it into data I could analyze.

I chose a cobo of manual and automated processing to turn my journal into a CSV (code here)

Then, because I  want to publish this, I removed the actual text and am now only publishing my aggregations/simplification vs. raw entries. 

Next, I visualized my first iteration based on entry word count in tableau [here](https://public.tableau.com/app/profile/rye.zupancis/viz/ChildhoodJournalAnalysis/Overview?publish=yes).

![](/assets/screen-shot-2021-11-13-at-10.03.03-am.png)

I really want to go deep into this analysis - it's so much fun! I've started writing my journal as a google form so it automatically generates a google sheet which can be connected live to my eventual app.