var tabList = document.getElementById("tablist");
var tabArray;
var ele;
function tabNode(titleString){
    var template = document.createElement("div");
    var tabLabel = document.createElement("label");
    var tabName = document.createTextNode(titleString);
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.name = "selectedTabs[]";
    checkBox.value = "pair";
    tabLabel.appendChild(checkBox);
    tabLabel.appendChild(tabName);
    template.appendChild(tabLabel);
    template.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)';
    template.style.transition = '0.3s';
    //template.style.borderRadius = '5px';
    //template.appendChild(listElement);
    return template;
    //tabList.appendChild(template);
}

function selectAllChange(){
    var checkboxes = document.getElementsByName("selectedTabs[]");
    for(var i=0; i<checkboxes.length; i++){
        checkboxes[i].checked = ele.checked;
        console.log(checkboxes[i].checked);
    }
}

function reloadTabs(){
    var checkboxes = document.getElementsByName("selectedTabs[]");
    for(var i=0; i<checkboxes.length; i++){
        if(checkboxes[i].checked)
            chrome.tabs.reload(tabArray[i].id);
    }
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#reload').addEventListener('click',reloadTabs);
    ele = document.querySelector('#selectAll');
    ele.addEventListener('click',selectAllChange);
});
console.log("breakpoint");
chrome.tabs.getAllInWindow(null, function(tabsfetched){
    tabArray = tabsfetched;
    tabArray.forEach(function(element) {
        tabList.appendChild(tabNode(element.title));
        console.log(element.title);
    }, this);
});