---
template: BlogPost
path: /portfolio/bugs
date: 2021-11-15T20:59:57.073Z
title: Insect Decision-Making
metaDescription: "Visualizing a model of behavior: d3.js, JavaScript"
exploration: true
thumbnail: /assets/roachesteaser.jpg
---
[Play with the visualization](https://ryezzz.github.io/100_days_data_visualization/day_18/index.html)

This interactive tool is a visual representation of a 2006 study of cockroach clustering behavior[: "Collegial decision making based on social amplification leads to optimal group formation"](https://www.ncbi.nlm.nih.gov/pubmed/16581903). It allows the user to see how the insects behave depending on different number of shelters and individuals. 

Essentially, roaches will always want to be clustered as densely as possible, but oddly, will never leave a single insect out - They'll cluster less densely to make sure everyone's included.

<iframe width="560" height="315" src="https://www.youtube.com/embed/sQH12Ynopvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[View Code](https://github.com/ryezzz/information-aesthetics)

Sources:

Amé JM1, Halloy J, Rivault C, Detrain C, Deneubourg JL. ["Collegial decision making based on social amplification leads to optimal group formation."](https://www.ncbi.nlm.nih.gov/pubmed/16581903)Proceedings of the National Academy of Sciences U.S.A, 2006

Cluster force code is a modified version of [this multi-foci layout block by Mike Bostock](https://bl.ocks.org/mbostock/1249681)