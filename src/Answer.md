# Which out of the two components (which are performing the same functionality) is performing better and how?


# The pure component is better as it is not re-rendering every single simple even if the counter button is clicked. As we know PureComponent is similar to Component but it skips re-renders for same props and state .

# The logic is pure component does Shallow Comparison , if the state value is same then it will not re-render . 

# Also at somecases when the state has a nested object or more complex large state values then we have to use simple component as it re-renders everytime when come changes occurs.