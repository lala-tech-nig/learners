/**
 * WhatsApp Integration Utilities
 * Generates WhatsApp deep links with pre-filled messages
 */

const WHATSAPP_NUMBER = '2348121444306';

/**
 * Generate WhatsApp enrollment link for a specific course
 * @param {Object} course - Course object containing course details
 * @returns {string} WhatsApp URL with pre-filled message
 */
export function generateEnrollmentLink(course) {
    const message = `Hey there, I'm interested in this course:

📚 *${course.title}*
🔢 Course Code: ${course.courseCode}
💰 Price: ₦${course.cost.toLocaleString()}
⏱️ Duration: ${course.duration}

I'd love to learn more about enrollment and start my personalized learning journey!`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Generate WhatsApp link for instructor signup
 * @returns {string} WhatsApp URL with pre-filled message
 */
export function generateInstructorLink() {
    const message = `Hey there, I'm interested in becoming an instructor on your platform!

I'd like to know more about:
- Requirements to join
- Course creation process
- Compensation structure
- Support provided

Looking forward to hearing from you!`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Generate general contact WhatsApp link
 * @param {string} customMessage - Optional custom message
 * @returns {string} WhatsApp URL
 */
export function generateContactLink(customMessage = '') {
    const message = customMessage || 'Hello! I have a question about LearnersHub.';
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
