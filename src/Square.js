import React from 'react';

    function Square(props) {
        return (
            React.createElement("button", {className: "square", onClick: props.onClick},
                props.value));


    }

  export default Square;