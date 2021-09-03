---
template: BlogPost
path: /bugs
date: 2021-06-06T17:26:26.617Z
title: Insect Decision-Making
metaDescription: d3.js, JavaScript
exploration: true
thumbnail: /assets/roachesteaser.jpg
---
[Play with the visualization](https://ryezzz.github.io/100_days_data_visualization/day_18/index.html)

I created this design using the d3.js cluster force layout. My sorting algorithm isn't completely finalized in this prototype. It is based on a 2006 study of cockroach clustering behavior, ["Collegial decision making based on social amplification leads to optimal group formation"](https://www.ncbi.nlm.nih.gov/pubmed/16581903) and allows the user to see how the insects sort depending on different conditions.



<iframe width="560" height="315" src="https://www.youtube.com/embed/sQH12Ynopvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[View Code](https://github.com/ryezzz/information-aesthetics)

Sources:

Amé JM1, Halloy J, Rivault C, Detrain C, Deneubourg JL. ["Collegial decision making based on social amplification leads to optimal group formation."](https://www.ncbi.nlm.nih.gov/pubmed/16581903)Proceedings of the National Academy of Sciences U.S.A, 2006

Cluster force code is a modified version of [this multi-foci layout block by Mike Bostock](https://bl.ocks.org/mbostock/1249681)