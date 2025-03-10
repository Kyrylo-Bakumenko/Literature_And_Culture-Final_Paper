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

The visualization below shows the results of Latent Dirichlet Allocation (LDA) topic modeling on our Korean literature corpus:

<div class="ratio ratio-16x9 mb-4">
  <iframe src="assets/lda_topics.html" title="PyLDAvis Visualization"></iframe>
</div>

### About LDA Topic Modeling

LDA (Latent Dirichlet Allocation) is a statistical method for discovering abstract topics within a collection of documents. It works by:

1. Identifying patterns of word co-occurrence across documents
2. Grouping these patterns into "topics" (clusters of words that frequently appear together)
3. Mapping documents to these topics, showing how each document contains a mixture of topics

In our visualization, each topic is represented as a cluster of related words. The size of each word indicates its importance to that topic. Documents are positioned based on their topic distributions, with similar documents appearing closer together.

This analysis reveals thematic patterns across Korean literature, helping us identify recurring motifs, historical concerns, and stylistic characteristics that might not be apparent from reading individual texts.
