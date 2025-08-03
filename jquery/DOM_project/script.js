function createDomTree(element, parent) {
    const wrapper = document.createElement('div');
    wrapper.className = 'node-wrapper';

    const box = document.createElement('div');
    box.className = 'node-box';
    box.innerText = `<${element.tagName.toLowerCase()}>`;
    wrapper.appendChild(box);

    if (element.children.length > 0) {
        const container = document.createElement('div');
        container.className = 'node-container';

        Array.from(element.children).forEach(child => {
            createDomTree(child, container);
        });

        wrapper.appendChild(container);
    }

    parent.appendChild(wrapper);
}

$('#generate-btn').click(() => {
    const htmlString = $('#html-input').val();
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = htmlString;

    const visualContainer = document.getElementById('dom-visual');
    visualContainer.innerHTML = '';

    Array.from(tempContainer.children).forEach(child => {
        createDomTree(child, visualContainer);
    });
});

$('#download-btn').click(() => {
    html2canvas(document.querySelector("#dom-visual")).then(canvas => {
        const link = document.createElement('a');
        link.download = 'dom-tree.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
