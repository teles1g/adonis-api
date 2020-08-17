const Project = use('App/Models/Project')

class ProjectController {
  async store ({ request, response, auth }) {
    const data = request.only(['title', 'description'])

    const project = await Project.create({ ...data, user_id: auth.user.id })

    return project
  }
}

module.exports = ProjectController
