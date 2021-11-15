---
template: BlogPost
path: /portfolio/films
date: 2021-11-15T21:00:30.188Z
title: Film Revenues Over Time
metaDescription: A flexible design that I often use instead of a stacked bar chart made with d3
exploration: true
thumbnail: /assets/screen-shot-2018-05-08-at-10.18.50-am.png
---
[Here's a bar chart replacement/beeswarm plot concept](https://ryezzz.github.io/temp/) I created using d3's cluster force. It's based on Mike Bostock's [beeswarm](https://bl.ocks.org/mbostock/6526445e2b44303eebf21da3b6627320) plot. This is an analysis of top grossing films over time, but can be applied to many other situations.

This chart is fun to interact with on hover/touch because of a [Voronoi](https://bl.ocks.org/mbostock/4060366) overlay, which allows the user, both on mobile and desktop, to easily and smoothly select tiny points.

I created it using [this Kaggle dataset](https://www.kaggle.com/PromptCloudHQ/imdb-data)