# getElementBySearch
Search for ID values and Class values on a webpage or even an IFrame. Read the script!


# How to Use?

example html:
<code>
  <div>
    <button onclick="console.log('you did it!')" class="_434324234_btn"  id="_242424234243_submit">You found me!</button>
  </div>
  </code>
  
 search("_submit", null, 0, "item").click(); //clicks the item -- OUTPUTS "you did it!"
 
 search("") //returns an array of all id and Class values
 
 search("","frames[0]"); //returns an array  of all id and class values in the first IFrame 
 // so a frame in a frame looks like this 
 search("","frames[0].frames[0]");
 
 // use null if your aren't using an iframe
 
 // The third parameter can either be 0 or 1; 0 for IDs and 1 for Classes; You must have this parameter to use the 4 parameter
 
 // The fourth parameter "getText" "setText" "item"(equal to document.getElementBy(Id or Class)(itemname)) "fun@ insert js code here"
