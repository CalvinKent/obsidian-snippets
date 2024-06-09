const dir = "MWEfolder" // desired directory
const myTasks = dv.pages('"' + dir + '"').file.tasks 
	.filter(t => t.parent == null || t.parent < 2).map(t => {
		if (t.parent == null) return t;
		if (t.parent != null) {
			t.children = [];
			return t;
		}
	})
dv.taskList(myTasks, false);