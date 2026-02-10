export const CONTACT_NUMBER = '+2348121444306';

export const generateEnrollmentLink = (course) => {
    const message = `Hey there, am interested in this course:
  
Title: ${course.title}
Code: ${course.courseCode}
Cost: ₦${course.cost.toLocaleString()}
Link: ${window.location.origin}/courses/${course.id} (Ref Image)

Please connect me with the instructor.`;

    return `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const generateInstructorLink = () => {
    const message = "Hey there, am interested in becoming an instructor at Learners.";
    return `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const generateContactLink = () => {
    const message = "Hello, I have an inquiry about Learners.";
    return `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const generateRequestConceptLink = () => {
    const message = "Hey there, I didn't find the course or concept I'm interested in. I'd like to request a specific topic/logic to learn.";
    return `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;
};
