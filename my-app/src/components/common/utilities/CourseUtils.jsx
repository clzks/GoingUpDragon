export const formatCourseData = (data) => {
  return data.map((course) => ({
    title: course.courseTitle,
    text: course.courseDescription,
    imageUrl: "", // 필요하면 백엔드에서 추가
    instructor: course.instructorName,
    rating: course.rate,
    numReviews: course.reviewCount,
    price: course.price,
    level: course.courseLevel,
    tag: course.subjectTagNames, // ✅ 배열 그대로 사용
    courseId: course.courseId,
    enrollmentCount: course.enrollmentCount,
  }));
};
