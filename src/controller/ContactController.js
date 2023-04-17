class ContactController {
  index(req, res) {
    console.log("contact");
    res.json({ message: "Welcome to contact page!"});
  }
}
module.exports = new ContactController();
