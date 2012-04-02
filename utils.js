var CourseStore, CourseItemStore, courseItems, course;
window.mobilenoppa.loadFixtures = function() {
  CourseStore = Ext.getStore('Courses');
  CourseItemStore = Ext.getStore('CourseItems');
  course = CourseStore.data.last();
  if (!course) {
    course = Ext.create('MobileNoppa.model.Course', {
      code: "T-110.1101",
      name: "Basics of binary code"
    });
    CourseStore.add(course);
  }
  if (course) {
    courseItems = [];
    for (var i=0; i<10; i++) {
      var date = new Date();
      date.setHours(Math.floor(Math.random()*24));
      date.setMinutes(0);
      date.setSeconds(0);
      
      courseItems.push(
        Ext.create('MobileNoppa.model.CourseItem', {
          title:"Assignment "+(i+1),
          description: "The assignment no "+(i+1),
          date: date
        })
      );
      
      course.courseitems().add(courseItems[i]);
      CourseItemStore.add(courseItems[i]);
    }
  } else {
    console.warn('No courses found from the store');
  }
}