function changeContent(page){
    const contentDiv = document.getElementById('content');
    switch(page){
        case 'home':
            contentDiv.innerHTML=`
            <h3>INFO</h3>
				<p> Name : Dhruv Sharma <br>
                    Mobile no. : +91 9828222225 <br>
				</p>
                <h3>Residence</h3>
                <p> City : Jaipur<br>
                    State : Rajasthan<br>
                    Pincode : 302001
                </p>
                <h3>Education</h3>
                <p> 10th : 84% from CBSE Board<br>
                    12th : 80% from CBSE Board with PCM<br>
                    Graduation : B.Tech from SRM Chennai(8.5 CGPA)
                </p>`;
        break;
        case 'resume':
            contentDiv.innerHTML=`
             <h3>My Resume</h3>
                <iframe 
                    src="resume.pdf" 
                    width="100%" 
                    height="600px"
                    style="border: none;">
                </iframe>
            `;
        break;
        case 'contact':
            contentDiv.innerHTML = 
				`<h2>Contact Me</h2> 
				<form> 
				<label for="name">Name:</label> 
				<input type="text" id="name" name="name" 
						placeholder="Your Name" required>
				<label for="mobile">Mobile:</label> 
				<input type="tel" id="mobile" name="mobile" 
						placeholder="Your Mobile no." required>
				<label for="message">Message:</label> 
				<textarea id="message" name="message"
                placeholder="Your Message"
                rows="4" required></textarea>

				<button type="submit">Send Message</button> 
				</form>`;
			break;
        case 'help':
            contentDiv.innerHTML=
            `<h3>For any other help, please visit...`;
            break;

		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}

