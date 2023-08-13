
 

const Url = 'https://jsonplaceholder.typicode.com/users';

async function fetchData() {
    try {
        const response = await fetch(Url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error data:', error);
        return null;
    }
}

async function displayData() {
    const dataContainer = document.getElementById('data');
    const data = await fetchData();

    if (data) {
        dataContainer.innerHTML = '';

        data.forEach(user => {
            const flexItem = document.createElement('div');
            flexItem.classList.add('flex-item');
            flexItem.innerHTML = `
            <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>street:</strong> ${user.street}</p>
                <p><strong>city:</strong> ${user.city}</p>
            `;

            dataContainer.appendChild(flexItem);
        });
    } else {
        dataContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
    }
}

displayData();