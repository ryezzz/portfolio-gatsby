---
template: BlogPost
path: /portfolio/journal
date: 2022-01-09T18:14:24.807Z
title: Childhood Diary Analysis
metaDescription: An ongoing text analysis of my journal - D3, Python and Tableau
exploration: true
thumbnail: /assets/screen-shot-2022-01-24-at-7.28.42-pm.png
---
I've kept a personal diary since middle school and the text in it is very much "stream of consciousness" and really, really tough to read. 

In order to understand my journal and turn it into a cohesive story I've begun to visualize it. I'm starting by tracking word counts per entry over time and will eventually experiment with sentiment analysis.

In terms of process, I cleaned this messy corpus of about 200,000 words using python and turned it into a dataset. I then visualized my first iteration based on entry word count in [Tableau](https://public.tableau.com/app/profile/rye.zupancis/viz/ChildhoodJournalAnalysis/Overview?publish=yes) and created a [](https://ryezzz.github.io/visualization-sketches/childhood-diary-swarm-scroll/)[beeswarm scrollytelling](https://ryezzz.github.io/visualization-sketches/childhood-diary-swarm-scroll-drawing/) exploration using d3. The style resembles my physical journals and sketchbooks.

Actual entries have been removed and only aggregations & simplifications are be visible. More iterations are on my [viz sketch github repo](https://github.com/ryezzz/visualization-sketches).



<iframe width="923" height="573" src="https://www.youtube.com/embed/UWi1IoWQojo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

![](/assets/screen-shot-2021-11-13-at-10.03.03-am.png)

I really want to go deep into this analysis - it's so much fun! I've started writing my journal as a google form so it automatically generates a google sheet which can be connected live to my eventual app.