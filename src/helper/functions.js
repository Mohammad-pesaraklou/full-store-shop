const shorten = (title) => {
    const name = title.split(" ")
    const newName = `${name[0]} ${name[1]}`
    return newName
}

export {shorten}