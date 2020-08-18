const Task = use('App/Models/Task')

class TaskController {
  async store ({ params, request }) {
    const data = request.only([
      'user_id',
      'title',
      'description',
      'due_date',
      'file_id'
    ])

    const task = await Task.create({ ...data, project_id: params.projects_id })

    return task
  }

  async show ({ params }) {
    const task = await Task.findOrFail(params.id)

    return task
  }
}

module.exports = TaskController
