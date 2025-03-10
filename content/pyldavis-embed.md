# Pre-generated PyLDAvis Visualization

For truly interactive LDA visualizations, we can pre-generate them and embed the HTML. Here's how:

## Generate the HTML Visualization

First, you would run this code in a regular Python environment (not in the browser):

```python
# This code would be run offline, not in the browser
import pyLDAvis
import pyLDAvis.sklearn
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.decomposition import LatentDirichletAllocation

# Load your data and create LDA model
# ...code to prepare data...

# Generate the pyLDAvis visualization
vis_data = pyLDAvis.sklearn.prepare(lda, count_matrix, count_vectorizer)

# Save to an HTML file
pyLDAvis.save_html(vis_data, 'ldavis_visualization.html')
```

## Embedding Pre-generated Visualization

Then embed it in an iframe:

```html
<div class="ratio ratio-16x9">
  <iframe src="assets/ldavis_visualization.html" title="PyLDAvis Visualization"></iframe>
</div>
```

By using this approach, you can include the rich interactive visualizations without requiring PyLDAvis to run in the browser.
