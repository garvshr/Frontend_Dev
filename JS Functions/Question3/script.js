const user = {
    name: "Rahul",
    showName: () => console.log(this.name)
}

user.showName()

const fixedUser = {
    name: "Rahul",
    showName: function() { console.log(this.name) }
}

fixedUser.showName()
