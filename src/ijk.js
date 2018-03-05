var ijk = function(i)
{
    const basic_dom_test = function(bdd)
    {
        let bdd_length = document.querySelectorAll(bdd).length;
        switch( document.querySelectorAll(bdd).length )
        {
            case 0:
                console.error( "ijk error: No selectors founded!" );
                console.error( "Selected selector: " + bdd );
                return;
            case 1: return document.querySelector(bdd);
            default: return document.querySelectorAll(bdd);
        }
    };
    const text_and_html = function(tah_input , tah_selector , tah_use_html)
    {
        let text_input = tah_input;
        let input_type = tah_use_html === true ? "innerHTML" : "innerText";
        if ( selector.length > 1 )
        {
            text_input = Array.from(tah_input);
            if( parseInt(text_input.length,10) !== parseInt(tah_selector.length,10) )
            {
                console.error("ijk error: Mutiple selectors must use arrays with same length DOM!");
                return;
            }
            text_input.forEach(function(text,index)
            {
                tah_selector[index][input_type] = text;
                return;
            });
        }
        else
        {
            tah_selector[input_type] = text_input;
            return;
        }
    };
    let selector = basic_dom_test(i);
    selector.html = (ti) => { text_and_html(ti,selector,true); };
    selector.text = (ti) => { text_and_html(ti,selector,false); };
    selector.css = (ti) => {
        // selector.style[ti];
    };
    return selector;
};