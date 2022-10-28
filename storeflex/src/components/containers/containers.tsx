
export const AppContainer = (props) => {
    return(
        <div className="container-fluid">
            {props.children}
        </div>
    )
}

export const SplitPaneContainer = (props) => {
    return(
        <div className="sf-split-pane-container">
            <div className="sf-splitPane-left">
                {props.left}
            </div>
            <div className="sf-splitPane-right">
                {props.right}
            </div>
        </div>
    )
}