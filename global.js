// Function to create and add the global header
function createGlobalHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <nav>
            <div class="logo">
                <img src="sample-logo.png" alt="Logo" style="width: 30px;">
            </div>
            <div class="nav-content">
                <ul class="centered-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="search-bar" style="margin-left: auto;">
                <input type="text" placeholder="Search">
                <button>Search</button>
            </div>
        </nav>
    `;
    header.style.padding = '10px 20px';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between';
    document.body.insertBefore(header, document.body.firstChild);
}

// Function to create and add the global footer
function createGlobalFooter() {
    const footer = document.createElement('footer');
    footer.style.backgroundColor = '#000';
    footer.style.color = '#fff';
    footer.style.display = 'flex';
    footer.style.flexDirection = 'row';
    footer.style.alignItems = 'center';
    footer.style.padding = '20px';

    const logoDiv = document.createElement('div');
    logoDiv.style.display = 'flex';
    logoDiv.style.alignItems = 'center';

    const logoElement = document.createElement('img');
    logoElement.src = 'sample-logo.png';
    logoElement.alt = 'Logo';
    logoElement.style.width = '40px';
    logoElement.style.marginRight = '10px';

    const textDiv = document.createElement('div');
    textDiv.style.display = 'flex';
    textDiv.style.flexDirection = 'column';

    const titleElement = document.createElement('h2');
    titleElement.textContent = 'Title';
    titleElement.style.marginBottom = '5px';

    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`;

    textDiv.appendChild(titleElement);
    textDiv.appendChild(paragraphElement);

    logoDiv.appendChild(logoElement);

    footer.appendChild(logoDiv);
    footer.appendChild(textDiv);

    document.body.appendChild(footer);
}

// Execute on window load
window.onload = function() {
    createGlobalHeader();
    createGlobalFooter();
};