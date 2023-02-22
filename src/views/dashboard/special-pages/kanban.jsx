import { useState, memo, Fragment, useCallback } from "react";

//react-bootstrap
import { Row, Col } from "react-bootstrap";

//router-dom
import { Link } from "react-router-dom";

//pulgin
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";

//components
import Card from "../../../components/bootstrap/card";
import KanbanColumn from "../../../components/partials/kanban/kanban-column";
import KanbanItem from "../../../components/partials/kanban/kanban-item";

//images
import avatars11 from "/src/assets/images/avatars/06.png";
import avatars12 from "/src/assets/images/avatars/07.png";
import avatars13 from "/src/assets/images/avatars/08.png";

const tasksList = [
  {
    _id: 1,
    name: "Create Sidebar in Dashboard",
    status: "Design",
    className: "bg-soft-warning",
  },
  {
    _id: 2,
    name: "General improvement in pages",
    status: "Research",
    className: "bg-soft-info",
  },
  {
    _id: 3,
    name: "Product List view Changes",
    status: "Planning",
    className: "bg-soft-primary",
  },
  {
    _id: 4,
    name: "Add Multiple theme options",
    status: "Design",
    className: "bg-soft-warning",
  },
  {
    _id: 5,
    name: "Notification Module Setting",
    status: "Research",
    className: "bg-soft-info",
  },
  {
    _id: 6,
    name: "Admin Panel Customization",
    status: "Planning",
    className: "bg-soft-primary",
  },
  {
    _id: 7,
    name: "Sidebar in Dashboard Themes",
    status: "Planning",
    className: "bg-soft-primary",
  },
  {
    _id: 8,
    name: "Login screen update in mobile app",
    status: "Content",
    className: "bg-soft-success",
  },
  {
    _id: 9,
    name: "Helpdesk in Dashboard Themes",
    status: "Design",
    className: "bg-soft-warning",
  },
  // { _id: 11, name: 'Helpdesk in Dashboard Themes', status: "review" },
];

const channels = ["Design", "Research", "Planning", "Content"];
const labelsMap = {
  Design: "Open Projects",
  Research: "In Progress",
  Planning: "Reviews",
  Content: "Closed",
};
const Number = [
  {
    amount: "05",
    class: "",
  },
];

const Kanban = memo(() => {
  const [tasks, setTaskStatus] = useState(tasksList);

  const changeTaskStatus = useCallback(
    (id, status) => {
      let task = tasks.find((task) => task._id === id);
      const taskIndex = tasks.indexOf(task);
      task = { ...task, status };
      let newTasks = update(tasks, {
        [taskIndex]: { $set: task },
      });
      setTaskStatus(newTasks);
    },
    [tasks]
  );
  return (
    <Fragment>
      <Row>
        <Col md="12">
          <Card>
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <p className="mb-md-0 mb-2 d-flex align-items-center gap-2">
                  <svg
                    className="icon-20"
                    width="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5715 13.5941L20.4266 7.72014C20.7929 7.35183 21 6.84877 21 6.32376V4.60099C21 3.52002 20.1423 3 19.0844 3H4.91556C3.85765 3 3 3.52002 3 4.60099V6.3547C3 6.85177 3.18462 7.33087 3.51772 7.69419L8.89711 13.5632C8.9987 13.674 9.14034 13.7368 9.28979 13.7378L14.1915 13.7518C14.3332 13.7528 14.4699 13.6969 14.5715 13.5941Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M9.05615 13.6858V20.2904C9.05615 20.5309 9.17728 20.7575 9.37557 20.8873C9.48889 20.9621 9.61978 21.0001 9.75068 21.0001C9.84934 21.0001 9.948 20.9791 10.0398 20.9372L14.0057 19.0886C14.2539 18.9739 14.4131 18.7213 14.4131 18.4429V13.6858H9.05615Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Filter by task name...
                </p>
                <div className="d-flex align-items-center flex-wrap">
                  <button className="btn btn-outline-secondary me-3 mt-2">
                    Filter
                    <span className="btn-inner ms-2">
                      <svg
                        className="icon-20"
                        width="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.5715 13.5941L20.4266 7.72014C20.7929 7.35183 21 6.84877 21 6.32376V4.60099C21 3.52002 20.1423 3 19.0844 3H4.91556C3.85765 3 3 3.52002 3 4.60099V6.3547C3 6.85177 3.18462 7.33087 3.51772 7.69419L8.89711 13.5632C8.9987 13.674 9.14034 13.7368 9.28979 13.7378L14.1915 13.7518C14.3332 13.7528 14.4699 13.6969 14.5715 13.5941Z"
                          fill="currentColor"
                        ></path>
                        <path
                          opacity="0.4"
                          d="M9.05615 13.6858V20.2904C9.05615 20.5309 9.17728 20.7575 9.37557 20.8873C9.48889 20.9621 9.61978 21.0001 9.75068 21.0001C9.84934 21.0001 9.948 20.9791 10.0398 20.9372L14.0057 19.0886C14.2539 18.9739 14.4131 18.7213 14.4131 18.4429V13.6858H9.05615Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <button className="btn btn-outline-secondary me-3 mt-2">
                    Sort by
                    <span className="btn-inner ms-2">
                      <svg
                        className="icon-18"
                        width="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M8.08329 12.958H1.50777C0.675552 12.958 0 13.6217 0 14.4393C0 15.2559 0.675552 15.9207 1.50777 15.9207H8.08329C8.91551 15.9207 9.59106 15.2559 9.59106 14.4393C9.59106 13.6217 8.91551 12.958 8.08329 12.958Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.4"
                          d="M20.0001 3.37867C20.0001 2.56214 19.3246 1.89844 18.4934 1.89844H11.9179C11.0857 1.89844 10.4102 2.56214 10.4102 3.37867C10.4102 4.1963 11.0857 4.86 11.9179 4.86H18.4934C19.3246 4.86 20.0001 4.1963 20.0001 3.37867Z"
                          fill="currentColor"
                        />
                        <path
                          d="M6.87774 3.37856C6.87774 5.24523 5.33886 6.75821 3.43887 6.75821C1.53999 6.75821 0 5.24523 0 3.37856C0 1.51298 1.53999 0 3.43887 0C5.33886 0 6.87774 1.51298 6.87774 3.37856Z"
                          fill="currentColor"
                        />
                        <path
                          d="M19.9998 14.3992C19.9998 16.2648 18.4609 17.7777 16.5609 17.7777C14.6621 17.7777 13.1221 16.2648 13.1221 14.3992C13.1221 12.5325 14.6621 11.0195 16.5609 11.0195C18.4609 11.0195 19.9998 12.5325 19.9998 14.3992Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </button>
                  <button className="btn btn-outline-secondary me-3 mt-2">
                    Group by
                    <span className="btn-inner ms-2">
                      <svg
                        className="icon-18"
                        width="18"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.4"
                          d="M14.0756 0H17.4616C18.8639 0 20.0001 1.14585 20.0001 2.55996V5.97452C20.0001 7.38864 18.8639 8.53449 17.4616 8.53449H14.0756C12.6734 8.53449 11.5371 7.38864 11.5371 5.97452V2.55996C11.5371 1.14585 12.6734 0 14.0756 0Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.53852 0H5.92449C7.32676 0 8.46301 1.14585 8.46301 2.55996V5.97452C8.46301 7.38864 7.32676 8.53449 5.92449 8.53449H2.53852C1.13626 8.53449 0 7.38864 0 5.97452V2.55996C0 1.14585 1.13626 0 2.53852 0ZM2.53852 11.4655H5.92449C7.32676 11.4655 8.46301 12.6114 8.46301 14.0255V17.44C8.46301 18.8532 7.32676 20 5.92449 20H2.53852C1.13626 20 0 18.8532 0 17.44V14.0255C0 12.6114 1.13626 11.4655 2.53852 11.4655ZM17.4615 11.4655H14.0755C12.6732 11.4655 11.537 12.6114 11.537 14.0255V17.44C11.537 18.8532 12.6732 20 14.0755 20H17.4615C18.8637 20 20 18.8532 20 17.44V14.0255C20 12.6114 18.8637 11.4655 17.4615 11.4655Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </button>
                  <button className="btn btn-outline-secondary me-3 mt-2">
                    Share
                    <span className="btn-inner ms-2">
                      <svg
                        className="icon-20"
                        width="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4274 0.578299C18.9274 0.0672987 18.1874 -0.121701 17.4974 0.0782986L1.40742 4.7273C0.67942 4.9293 0.16342 5.5063 0.0244202 6.2383C-0.11758 6.9843 0.37842 7.9323 1.02642 8.3283L6.05742 11.4003C6.57342 11.7163 7.23942 11.6373 7.66642 11.2093L13.4274 5.4483C13.7174 5.1473 14.1974 5.1473 14.4874 5.4483C14.7774 5.7373 14.7774 6.2083 14.4874 6.5083L8.71642 12.2693C8.28842 12.6973 8.20842 13.3613 8.52342 13.8783L11.5974 18.9283C11.9574 19.5273 12.5774 19.8683 13.2574 19.8683C13.3374 19.8683 13.4274 19.8683 13.5074 19.8573C14.2874 19.7583 14.9074 19.2273 15.1374 18.4773L19.9074 2.5083C20.1174 1.8283 19.9274 1.0883 19.4274 0.578299Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.4"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.01049 14.8074C0.818492 14.8074 0.626492 14.7344 0.480492 14.5874C0.187492 14.2944 0.187492 13.8204 0.480492 13.5274L1.84549 12.1614C2.13849 11.8694 2.61349 11.8694 2.90649 12.1614C3.19849 12.4544 3.19849 12.9294 2.90649 13.2224L1.54049 14.5874C1.39449 14.7344 1.20249 14.8074 1.01049 14.8074ZM4.77169 15.9998C4.57969 15.9998 4.38769 15.9268 4.24169 15.7798C3.94869 15.4868 3.94869 15.0128 4.24169 14.7198L5.60669 13.3538C5.89969 13.0618 6.37469 13.0618 6.66769 13.3538C6.95969 13.6468 6.95969 14.1218 6.66769 14.4148L5.30169 15.7798C5.15569 15.9268 4.96369 15.9998 4.77169 15.9998ZM5.02539 19.5678C5.17139 19.7148 5.36339 19.7878 5.55539 19.7878C5.74739 19.7878 5.93939 19.7148 6.08539 19.5678L7.45139 18.2028C7.74339 17.9098 7.74339 17.4348 7.45139 17.1418C7.15839 16.8498 6.68339 16.8498 6.39039 17.1418L5.02539 18.5078C4.73239 18.8008 4.73239 19.2748 5.02539 19.5678Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <DndProvider backend={HTML5Backend}>
          {channels.map((channel) => (
            <KanbanColumn
              key={channel}
              status={channel}
              changeTaskStatus={changeTaskStatus}
            >
              <Card>
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <h6>
                      {labelsMap[channel]}
                      {Number.map((item, index) => {
                        return (
                          <span key={index} className={item.class}>
                            {item.amount}
                          </span>
                        );
                      })}
                    </h6>
                    <div className="dropdown">
                      <span
                        className="d-flex align-items-center h5 mb-0"
                        id="dropdownMenuButton07"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width="22"
                          viewBox="0 0 22 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownMenuButton07"
                      >
                        <Link className="dropdown-item" to="#">
                          <svg
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="me-2"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M14.7366 2.76175H8.08455C6.00455 2.75375 4.29955 4.41075 4.25055 6.49075V17.3397C4.21555 19.3897 5.84855 21.0807 7.89955 21.1167C7.96055 21.1167 8.02255 21.1167 8.08455 21.1147H16.0726C18.1416 21.0937 19.8056 19.4087 19.8026 17.3397V8.03975L14.7366 2.76175Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                            <path
                              d="M14.4741 2.75V5.659C14.4741 7.079 15.6231 8.23 17.0431 8.234H19.7971"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                            <path
                              d="M14.2936 12.9141H9.39355"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>{" "}
                            <path
                              d="M11.8442 15.3639V10.4639"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          Duplicate
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <svg
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="me-2"
                          >
                            <path
                              d="M13.7476 20.4428H21.0002"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.78 3.79479C13.5557 2.86779 14.95 2.73186 15.8962 3.49173C15.9485 3.53296 17.6295 4.83879 17.6295 4.83879C18.669 5.46719 18.992 6.80311 18.3494 7.82259C18.3153 7.87718 8.81195 19.7645 8.81195 19.7645C8.49578 20.1589 8.01583 20.3918 7.50291 20.3973L3.86353 20.443L3.04353 16.9723C2.92866 16.4843 3.04353 15.9718 3.3597 15.5773L12.78 3.79479Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M11.021 6.00098L16.4732 10.1881"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          Rename
                        </Link>
                        <Link className="dropdown-item" to="#">
                          <svg
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="me-2"
                          >
                            <path
                              d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M20.708 6.23975H3.75"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <div>
                <div>
                  {tasks
                    .filter((item) => item.status === channel)
                    .map((item) => (
                      <KanbanItem key={item._id} id={item._id}>
                        <Card>
                          <Card.Body>
                            <div>
                              <div className="d-grid grid-flow-col align-items-center justify-content-between mb-2">
                                <span
                                  className={`${item.className} badge mb-3`}
                                >
                                  {item.status}
                                </span>
                                <div className="dropdown">
                                  <span
                                    className="h5"
                                    id="dropdownMenuButton11"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  ></span>
                                  <div className="dropdown">
                                    <span
                                      className="d-flex align-items-center h5 mb-0"
                                      id="dropdownMenuButton09"
                                      role="button"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <svg
                                        width="22"
                                        viewBox="0 0 22 5"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                  <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="dropdownMenuButton11"
                                  >
                                    <Link className="dropdown-item" to="#">
                                      <svg
                                        width="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="me-2"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M14.7366 2.76175H8.08455C6.00455 2.75375 4.29955 4.41075 4.25055 6.49075V17.3397C4.21555 19.3897 5.84855 21.0807 7.89955 21.1167C7.96055 21.1167 8.02255 21.1167 8.08455 21.1147H16.0726C18.1416 21.0937 19.8056 19.4087 19.8026 17.3397V8.03975L14.7366 2.76175Z"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>{" "}
                                        <path
                                          d="M14.4741 2.75V5.659C14.4741 7.079 15.6231 8.23 17.0431 8.234H19.7971"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>{" "}
                                        <path
                                          d="M14.2936 12.9141H9.39355"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>{" "}
                                        <path
                                          d="M11.8442 15.3639V10.4639"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                      Duplicate
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                      <svg
                                        width="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="me-2"
                                      >
                                        <path
                                          d="M13.7476 20.4428H21.0002"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M12.78 3.79479C13.5557 2.86779 14.95 2.73186 15.8962 3.49173C15.9485 3.53296 17.6295 4.83879 17.6295 4.83879C18.669 5.46719 18.992 6.80311 18.3494 7.82259C18.3153 7.87718 8.81195 19.7645 8.81195 19.7645C8.49578 20.1589 8.01583 20.3918 7.50291 20.3973L3.86353 20.443L3.04353 16.9723C2.92866 16.4843 3.04353 15.9718 3.3597 15.5773L12.78 3.79479Z"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M11.021 6.00098L16.4732 10.1881"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                      Rename
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                      <svg
                                        width="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="me-2"
                                      >
                                        <path
                                          d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M20.708 6.23975H3.75"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                        <path
                                          d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                      Delete
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <h6>{item.name}</h6>

                              <div className="d-flex justify-content-between align-items-center mt-4">
                                <div className="iq-media-group-1 d-flex align-items-center">
                                  <Link to="#" className="iq-media-1 rounded">
                                    <img
                                      src={avatars11}
                                      alt=""
                                      className="img-fluid icon iq-icon-box-2 rounded"
                                      loading="lazy"
                                    />
                                  </Link>
                                  <Link to="#" className="iq-media-1">
                                    <img
                                      src={avatars12}
                                      alt=""
                                      className="img-fluid icon iq-icon-box-2 rounded"
                                      loading="lazy"
                                    />
                                  </Link>
                                  <Link to="#" className="iq-media-1">
                                    <img
                                      src={avatars13}
                                      alt=""
                                      className="img-fluid icon iq-icon-box-2 rounded"
                                      loading="lazy"
                                    />
                                  </Link>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                  <div className="btn btn-icon btn-soft-primary me-2 btn-sm">
                                    <span className="btn-inner">
                                      <svg
                                        className="icon-16"
                                        width="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          opacity="0.4"
                                          d="M19.9927 18.9534H14.2984C13.7429 18.9534 13.291 19.4124 13.291 19.9767C13.291 20.5422 13.7429 21.0001 14.2984 21.0001H19.9927C20.5483 21.0001 21.0001 20.5422 21.0001 19.9767C21.0001 19.4124 20.5483 18.9534 19.9927 18.9534Z"
                                          fill="currentColor"
                                        ></path>
                                        <path
                                          d="M10.309 6.90385L15.7049 11.2639C15.835 11.3682 15.8573 11.5596 15.7557 11.6929L9.35874 20.0282C8.95662 20.5431 8.36402 20.8344 7.72908 20.8452L4.23696 20.8882C4.05071 20.8903 3.88775 20.7613 3.84542 20.5764L3.05175 17.1258C2.91419 16.4915 3.05175 15.8358 3.45388 15.3306L9.88256 6.95545C9.98627 6.82108 10.1778 6.79743 10.309 6.90385Z"
                                          fill="currentColor"
                                        ></path>
                                        <path
                                          opacity="0.4"
                                          d="M18.1208 8.66544L17.0806 9.96401C16.9758 10.0962 16.7874 10.1177 16.6573 10.0124C15.3927 8.98901 12.1545 6.36285 11.2561 5.63509C11.1249 5.52759 11.1069 5.33625 11.2127 5.20295L12.2159 3.95706C13.126 2.78534 14.7133 2.67784 15.9938 3.69906L17.4647 4.87078C18.0679 5.34377 18.47 5.96726 18.6076 6.62299C18.7663 7.3443 18.597 8.0527 18.1208 8.66544Z"
                                          fill="currentColor"
                                        ></path>
                                      </svg>
                                    </span>
                                  </div>
                                  <div className="btn btn-icon btn-soft-primary btn-sm">
                                    <span className="btn-inner">
                                      <svg
                                        className="icon-16"
                                        width="10"
                                        viewBox="0 0 13 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M12.5 1.5522C12.5 1.82039 12.3962 2.08998 12.1887 2.29498L7.25669 7.1911C7.05628 7.38908 6.7848 7.5 6.50053 7.5C6.21769 7.5 5.94621 7.38908 5.7458 7.1911L0.810919 2.29498C0.395888 1.88357 0.395888 1.21803 0.813761 0.806624C1.23163 0.396625 1.90677 0.398029 2.3218 0.809432L6.50053 4.95576L10.6793 0.809432C11.0943 0.398029 11.768 0.396625 12.1859 0.806624C12.3962 1.01162 12.5 1.28262 12.5 1.5522Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </KanbanItem>
                    ))}
                </div>
                <Col lg="12">
                  <Card className="bg-transparent shadow-none">
                    <div className="iq-dashed-border">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6 className="text-body mb-0">New Task</h6>
                        <svg
                          className="icon-20"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g>
                            <path
                              d="M12.0711 18.9706V4.82847M19.1421 11.8995H5"
                              stroke="currentColor"
                              strokeLinecap="round"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </Card>
                </Col>
              </div>
            </KanbanColumn>
          ))}
        </DndProvider>
      </Row>
    </Fragment>
  );
});

Kanban.displayName = "Kanban";
export default Kanban;
