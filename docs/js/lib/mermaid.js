function mermaidBuilder() {
    const list = $(document).find("pre[data-lang='mermaid']");
    //const list = $(document).find("pre[data-lang='mermaid']");

    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        $(element).addClass("mermaid")
        const codeHtml = $($(element).find('.lang-mermaid')[0]).text();
        $(element).html(codeHtml);

    }
}

