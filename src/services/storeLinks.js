// Buscar links salvos
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

// Salvar link no localStorage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);
    
    const hasLink = linksStored.some(link => link.id === newLink.id);
    
    if(hasLink){
        return;
    }

    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log('Link Salvo!!!')
}

// Deletar link
export function deleteLink(links, id){
    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@linksEncurtados', JSON.stringify(myLinks));

    return myLinks;
}