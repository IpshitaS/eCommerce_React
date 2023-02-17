//const heading = React.createElement("h1", {} ,"Nameste React");
        //console.log(heading); 
        //const root = ReactDOM.createRoot(document.getElementById("root"));
        //root.render(heading);

        const heading1 = React.createElement("h1", 
        {
            id : "title"
        } ,
        "heading 1"
        );

        const heading2 = React.createElement("h2", 
        {
            id : "title"
        } ,
        "heading 2"
        );

        const container = React.createElement(
            "div", 
            {
                id : "container"
            } ,
            [heading1 , heading2]
        );

        //console.log(container); 
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(container);