function toggleTheme() { 
    var theme = document.getElementsByTagName('link')[0]; 

    if (theme.getAttribute('href') == 'css/style.css') { 
      theme.setAttribute('href', 'css/style_escuro.css'); 
    } else { 
      theme.setAttribute('href', 'css/style.css'); 
    } 
}