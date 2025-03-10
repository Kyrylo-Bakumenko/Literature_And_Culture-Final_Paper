# Korean Literary Text Analysis

This page presents the results of our computational analysis of Korean literary texts, exploring patterns across a collection of Korean literature in translation.

## Timeline of Korean Literary Sources

The following visualization shows the distribution of our sources over time, with the word count for each text:

<div class="visualization-container my-4">
  <img src="assets/timeline.png" alt="Timeline of Korean literary sources" class="img-fluid rounded">
</div>

## TF-IDF Word Analysis

<div class="visualization-toggle mb-3">
  <div class="btn-group" role="group" aria-label="Visualization toggle">
    <button type="button" class="btn btn-outline-primary active" onclick="switchVisualization('overall')">Overall Top Words</button>
    <button type="button" class="btn btn-outline-primary" onclick="switchVisualization('positive')">Positive Words</button>
    <button type="button" class="btn btn-outline-primary" onclick="switchVisualization('negative')">Negative Words</button>
  </div>
</div>

<div id="visualization-container" class="my-4">
  <img id="tfidf-image" src="assets/tfidf_top10.jpg" alt="TF-IDF top 10 words per source" class="img-fluid rounded">
</div>

## Topic Modeling with LDA

<div class="lda-section">
  <p class="text-center mb-3">The visualization below shows the results of Latent Dirichlet Allocation (LDA) topic modeling on our Korean literature corpus:</p>
  
  <div class="ratio ratio-16x9">
    <iframe src="assets/lda_topics.html" title="PyLDAvis Visualization" allowfullscreen></iframe>
  </div>
</div>

### About LDA Topic Modeling

LDA (Latent Dirichlet Allocation) is a statistical method for discovering abstract topics within a collection of documents. It works by:

1. Identifying patterns of word co-occurrence across documents
2. Grouping these patterns into "topics" (clusters of words that frequently appear together)
3. Mapping documents to these topics, showing how each document contains a mixture of topics

In our visualization, each topic is represented as a cluster of related words. The size of each word indicates its importance to that topic. Documents are positioned based on their topic distributions, with similar documents appearing closer together.

Unfortunately, despite applying advanced computational methods, I was unable to unearth significant patterns from this analysis. This limitation appears to stem from several factors: the relatively small corpus size, the heterogeneous nature of the selected texts spanning different time periods and contexts, and the inherent challenges of analyzing translated works. The collection of short stories selected, while important individually, may not be representative of the entire literary or cultural context at the time. Additionally, nuances of Korean language and cultural references are inevitably altered in translation, potentially obscuring meaningful patterns that would be apparent in the original texts.

The analysis serves as an important reminder of the limitations of computational methods when working with literary texts, particularly those from cultures and contexts different from the tools' original design parameters. In the future, I will look for a larger and more focused corpus, potentially incorporating original language texts alongside translations, and developing more culturally-specific analytical frameworks.

### Texts Included in Analysis

The following 29 Korean literary works were included in this analysis:

1. The White Rabbit
2. Crows
3. The Gray Snowman
4. The Old Hatter
5. The Shore
6. Another Man's Room
7. Im Kkŏkchŏng
8. Lizard
9. My Innocent Uncle
10. The Son
11. Silvery World
12. Naktong River
13. Coarse Sand
14. Knifeblade
15. Mother's Hitching Post
16. The Shaman Painting
17. Far from Home
18. Wings
19. Jackals
20. The Battle of Dragon with Dragon
21. Ballad
22. The Ritual at the Well
23. When the Buckwheat Blooms
24. Wayfarer
25. Potatoes
26. Footprints in the Snow
27. A Lucky Day
28. Commoners' Village
29. Seoul 1964, Winter
