function showDoctors(speciality) {
    const doctorsDiv = document.getElementById('doctors');
    const appointmentFormDiv = document.getElementById('appointmentForm');
    let doctorsHtml = '';

    const doctorsList = {
        'general': [
            'Dr. John Doe', 'Dr. Jane Smith', 'Dr. Emily Davis', 'Dr. Michael Brown'
        ],
        'cardiology': [
            'Dr. Mark Lee', 'Dr. Susan Clark', 'Dr. Laura Wilson', 'Dr. David Miller'
        ],
        'pulmonology': [
            'Dr. Robert Brown', 'Dr. Linda Harris', 'Dr. Patricia Moore', 'Dr. James Taylor'
        ],
        'ophthalmology': [
            'Dr. Olivia Johnson', 'Dr. James White', 'Dr. Sarah Lewis', 'Dr. Daniel Walker'
        ],
        'oncology': [
            'Dr. Emma Black', 'Dr. William White', 'Dr. Linda Young', 'Dr. John Allen'
        ],
        'neurology': [
            'Dr. Amy Adams', 'Dr. Brian Turner', 'Dr. Nancy Scott', 'Dr. Thomas Hall'
        ],
        'dermatology': [
            'Dr. Megan Carter', 'Dr. Steven King', 'Dr. Barbara Wright', 'Dr. Patrick Green'
        ],
        'gynecology': [
            'Dr. Jessica Martinez', 'Dr. Robert Lee', 'Dr. Julia Roberts', 'Dr. Steven Young'
        ]
    };

    if (doctorsList[speciality]) {
        doctorsHtml = `
            <h2>${speciality.charAt(0).toUpperCase() + speciality.slice(1)}</h2>
            ${doctorsList[speciality].map(doctor => `
                <button onclick="showForm()">${doctor}</button>
            `).join('')}
        `;
    } else {
        doctorsHtml = `<p>No doctors available for this speciality.</p>`;
    }

    doctorsDiv.innerHTML = doctorsHtml;
    appointmentFormDiv.style.display = 'none';
}

function showForm() {
    const appointmentFormDiv = document.getElementById('appointmentForm');
    appointmentFormDiv.style.display = 'block';
}
