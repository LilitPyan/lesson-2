/*
mounting
1. constructor()/ The constructor() method is called before anything else, when the component is initiated,
                   and it is the natural place to set up the initial state and other initial values.
2. getDerivedStateFromProps()/ It takes state as an argument, and returns an object with changes to the state.
3. render()/ The render() method is required, and is the method that actual outputs HTML to the DOM.
4. componentDidMount()/ The componentDidMount() method is called after the component is rendered.
                         This is where you run statements that requires that the component is already placed in the DOM.

updating
1. getDerivedStateFromProps()/ +
2. shouldComponentUpdate()/ In the shouldComponentUpdate() method you can return a Boolean value
                            that specifies whether React should continue with the rendering or not.
3. render()/ The render() method has to re-render the HTML to the DOM, with the new changes.
4. getSnapshotBeforeUpdate()/ In the getSnapshotBeforeUpdate() method you can check what the values were before the update.
                              You should also include the componentDidUpdate() method, otherwise you will get an error.
5. componentDidUpdate()/ it exactly did updates

unmounting
1. componentWillUnmount()/ The componentWillUnmount method is called when the component is about to be removed from the DOM.

*/
