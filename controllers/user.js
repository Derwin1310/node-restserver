const getUser = (req, res) => {
  const { name, surname, apikey, page = 1, limit = 5 } = req.query

  res.json({
    ok: true,
    message: "get API - controller",
    name,
    surname,
    apikey,
    page,
    limit
  })
}

const postUser = (req, res) => {
  const { name, age } = req.body

  res.json({
    ok: true,
    message: "post API - controller",
    name,
    age
  })
}

const putUser = (req, res) => {
  const { id } = req.params

  res.json({
    ok: true,
    message: "put API - controller",
    id
  })
}

const patchUser = (req, res) => {
  res.json({
    ok: true,
    message: "patch API - controller"
  })
}

const deleteUser = (req, res) => {
  res.json({
    ok: true,
    message: "delete API - controller"
  })
}

module.exports = {
  getUser,
  postUser,
  putUser,
  patchUser,
  deleteUser
}