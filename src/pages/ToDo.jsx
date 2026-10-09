import { useState } from "react";
import {
  Plus,
  Star,
  X,
  Trash2,
  Check,
} from "lucide-react";

const initialTasks = [
  {
    id: 1,
    title: "Meeting with CEO",
    completed: false,
    starred: false,
  },
  {
    id: 2,
    title: "Pick up kids from school",
    completed: false,
    starred: true,
  },
  {
    id: 3,
    title: "Shopping with Brother",
    completed: false,
    starred: false,
  },
  {
    id: 4,
    title: "Review with HR",
    completed: true,
    starred: false,
  },
  {
    id: 5,
    title: "Going to Dia's School",
    completed: false,
    starred: false,
  },
  {
    id: 6,
    title: "Check design files",
    completed: false,
    starred: true,
  },
  {
    id: 7,
    title: "Update File",
    completed: false,
    starred: false,
  },
];

function ToDo() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showAddTask, setShowAddTask] = useState(false);
  const [newTask, setNewTask] = useState("");

  // ================================
  // TOGGLE TASK
  // ================================
  const handleToggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  // ================================
  // TOGGLE STAR
  // ================================
  const handleToggleStar = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              starred: !task.starred,
            }
          : task
      )
    );
  };

  // ================================
  // DELETE TASK
  // ================================
  const handleDeleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  // ================================
  // ADD TASK
  // ================================
  const handleAddTask = () => {
    const trimmedTask = newTask.trim();

    if (!trimmedTask) {
      return;
    }

    const task = {
      id: Date.now(),
      title: trimmedTask,
      completed: false,
      starred: false,
    };

    setTasks((previousTasks) => [
      ...previousTasks,
      task,
    ]);

    setNewTask("");
    setShowAddTask(false);
  };

  // ================================
  // ENTER KEY
  // ================================
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="min-h-full bg-[#f5f6fa]">

      {/* =========================================
          PAGE HEADER
      ========================================= */}
      <div className="mb-6 flex items-center justify-between">

        <h1 className="text-[24px] font-semibold text-[#20242b]">
          To-Do List
        </h1>

        <button
          type="button"
          onClick={() => setShowAddTask(true)}
          className="
            flex
            h-[48px]
            items-center
            gap-2
            rounded-[5px]
            bg-[#5b8def]
            px-6
            text-[13px]
            font-medium
            text-white
            shadow-sm
            transition
            hover:bg-[#4d7fe0]
          "
        >
          <Plus size={17} strokeWidth={2} />
          Add New Task
        </button>

      </div>

      {/* =========================================
          ADD NEW TODO SECTION
      ========================================= */}
      {showAddTask && (
        <div
          className="
            mb-5
            rounded-[8px]
            border
            border-[#e5e8ed]
            bg-white
            p-4
          "
        >
          <div className="flex items-center gap-3">

            <input
              type="text"
              value={newTask}
              onChange={(event) =>
                setNewTask(event.target.value)
              }
              onKeyDown={handleKeyDown}
              autoFocus
              placeholder="Write your task name here"
              className="
                h-[42px]
                flex-1
                rounded-[4px]
                border
                border-[#e1e5eb]
                bg-[#f8f9fb]
                px-4
                text-[12px]
                text-[#333a46]
                outline-none
                placeholder:text-[#aeb5bf]
                focus:border-[#5b8def]
                focus:bg-white
              "
            />

            <button
              type="button"
              onClick={handleAddTask}
              className="
                h-[42px]
                rounded-[5px]
                bg-[#5b8def]
                px-7
                text-[12px]
                font-medium
                text-white
                transition
                hover:bg-[#4d7fe0]
              "
            >
              Save
            </button>

            <button
              type="button"
              onClick={() => {
                setShowAddTask(false);
                setNewTask("");
              }}
              className="
                flex
                h-[42px]
                w-[42px]
                items-center
                justify-center
                rounded-[5px]
                border
                border-[#e1e5eb]
                bg-white
                text-[#8d96a3]
                transition
                hover:bg-[#f5f6f8]
              "
              aria-label="Close"
            >
              <X size={17} />
            </button>

          </div>
        </div>
      )}

      {/* =========================================
          TODO LIST
      ========================================= */}
      <div className="space-y-4">

        {tasks.map((task) => (

          <div
            key={task.id}
            className={`
              flex
              min-h-[68px]
              items-center
              rounded-[8px]
              border
              px-[17px]
              transition
              ${
                task.completed
                  ? "border-[#5b8def] bg-[#5b8def] text-white"
                  : "border-[#e2e6eb] bg-white"
              }
            `}
          >

            {/* =====================================
                CHECKBOX
            ===================================== */}
            <button
              type="button"
              onClick={() => handleToggleTask(task.id)}
              className={`
                flex
                h-[22px]
                w-[22px]
                shrink-0
                items-center
                justify-center
                rounded-[4px]
                border
                transition
                ${
                  task.completed
                    ? "border-white bg-transparent text-white"
                    : "border-[#dce1e7] bg-white text-transparent"
                }
              `}
              aria-label={
                task.completed
                  ? "Mark as incomplete"
                  : "Mark as complete"
              }
            >
              {task.completed && (
                <Check
                  size={15}
                  strokeWidth={2}
                />
              )}
            </button>

            {/* =====================================
                TASK TITLE
            ===================================== */}
            <span
              className={`
                ml-[17px]
                flex-1
                text-[13px]
                font-normal
                ${
                  task.completed
                    ? "text-white"
                    : "text-[#252b34]"
                }
              `}
            >
              {task.title}
            </span>

            {/* =====================================
                STAR BUTTON
            ===================================== */}
            <button
              type="button"
              onClick={() => handleToggleStar(task.id)}
              className="
                mr-5
                flex
                h-[30px]
                w-[30px]
                items-center
                justify-center
              "
              aria-label="Toggle favorite"
            >
              <Star
                size={19}
                strokeWidth={1.7}
                fill={
                  task.starred
                    ? "#ffc83d"
                    : "none"
                }
                className={
                  task.starred
                    ? "text-[#ffc83d]"
                    : task.completed
                    ? "text-white"
                    : "text-[#cfd5dc]"
                }
              />
            </button>

            {/* =====================================
                DELETE BUTTON
            ===================================== */}
            <button
              type="button"
              onClick={() => handleDeleteTask(task.id)}
              className={`
                flex
                h-[30px]
                w-[30px]
                items-center
                justify-center
                rounded-full
                border
                transition
                ${
                  task.completed
                    ? "border-white/70 text-white hover:bg-white/10"
                    : "border-[#dce1e7] text-[#c3cad3] hover:border-[#b9c0ca] hover:text-[#8d96a3]"
                }
              `}
              aria-label="Delete task"
            >
              {task.completed ? (
                <Trash2 size={15} />
              ) : (
                <X size={15} />
              )}
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ToDo;