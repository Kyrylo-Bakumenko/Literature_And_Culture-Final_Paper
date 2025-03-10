# Interactive Python Blog Demo

This is a demonstration of how you can embed interactive Python code cells in your blog posts.

## Introduction

In this blog post, we'll explore some basic Python functionality and show how the interactive code cells work.

## Basic Python Example

Let's start with a simple Python example:

```python
# This is a simple Python example
print("Hello, world!")
print("Welcome to my interactive Python blog!")

# Let's do some basic math
result = 5 * 7
print(f"5 × 7 = {result}")
```

## Data Visualization with Matplotlib

One of the most powerful features of this blog is the ability to create interactive data visualizations right in the browser:

```python
import matplotlib.pyplot as plt
import numpy as np

# Create some data for plotting
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Create a figure and plot the data
plt.figure(figsize=(10, 6))
plt.plot(x, y, 'b-', linewidth=2, label='sin(x)')
plt.title('Sine Wave')
plt.xlabel('x')
plt.ylabel('sin(x)')
plt.grid(True)
plt.legend()
plt.show()
```

## Data Analysis Example

You can also perform data analysis tasks:

```python
import numpy as np
import pandas as pd

# Create a sample dataset
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eva'],
    'Age': [25, 30, 22, 35, 28],
    'City': ['New York', 'San Francisco', 'Boston', 'Chicago', 'Miami'],
    'Salary': [75000, 85000, 62000, 92000, 78000]
}

# Create a DataFrame
df = pd.DataFrame(data)

# Display the DataFrame
print(df)
print("\nSummary statistics:")
print(df.describe())

# Filter the data
print("\nPeople with salary over 80,000:")
print(df[df['Salary'] > 80000])
```

## Interactive Mathematics

Try modifying the parameters below to see how the function changes:

```python
import numpy as np
import matplotlib.pyplot as plt

def plot_function(a=1, b=1, c=0):
    x = np.linspace(-10, 10, 1000)
    y = a * x**2 + b * x + c
    
    plt.figure(figsize=(10, 6))
    plt.plot(x, y, 'r-', linewidth=2)
    plt.title(f'f(x) = {a}x² + {b}x + {c}')
    plt.axhline(y=0, color='k', linestyle='-', alpha=0.3)
    plt.axvline(x=0, color='k', linestyle='-', alpha=0.3)
    plt.grid(True)
    plt.ylim(-10, 50)
    plt.show()
    
    # Calculate minimum/maximum
    x_vertex = -b / (2 * a) if a != 0 else "N/A"
    y_vertex = a * x_vertex**2 + b * x_vertex + c if a != 0 else "N/A"
    vertex_type = "Minimum" if a > 0 else "Maximum" if a < 0 else "N/A"
    
    print(f"Vertex: ({x_vertex}, {y_vertex})")
    print(f"Vertex type: {vertex_type}")

# Try different values here
plot_function(a=1, b=-2, c=1)
```

## Conclusion

This interactive blog platform allows you to combine narrative text with executable Python code cells. Feel free to modify the code examples and run them to see the results.

You can use this for:
- Educational content
- Data analysis reports
- Scientific papers with reproducible results
- Programming tutorials
- Interactive demonstrations
