function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'user-agent': 'Example',
            'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
        .then(response => response.json()) // 輸出成 json
}

function predictType(result){
    if(result =="Yes")
        return '執行後送';
    else
        return '不執行後送';
}

function submit(){
    const platform = document.getElementById('platform').value;
    const aircraft = document.getElementById('aircraft').value;
    const patient = document.getElementById('patient').value;
    const age_8gp = document.getElementById('age_8gp').value;
    const sex = document.getElementById('sex').value;
    const t_reg = document.getElementById('t_reg').value;
    const r_hosp_2gp = document.getElementById('r_hosp_2gp').value;
    const cri_1 = document.getElementById('cri_1').value;
    const cri_2 = document.getElementById('cri_2').value;
    const cri_3 = document.getElementById('cri_3').value;
    const cri_4 = document.getElementById('cri_4').value;
    const cri_5 = document.getElementById('cri_5').value;
    const cri_6 = document.getElementById('cri_6').value;
    const cri_7 = document.getElementById('cri_7').value;
    const cri_8 = document.getElementById('cri_8').value;
    const cri_9 = document.getElementById('cri_9').value;
    const cri_10 = document.getElementById('cri_10').value;
    const cri_11 = document.getElementById('cri_11').value;
    const cri_12 = document.getElementById('cri_12').value;
    const cri_13 = document.getElementById('cri_13').value;
    const cri_14 = document.getElementById('cri_14').value;
    const ev_1 = document.getElementById('ev_1').value;
    const ev_2 = document.getElementById('ev_2').value;
    const ev_3 = document.getElementById('ev_3').value;
    const GCS_gp = document.getElementById('GCS_gp').value;
    const HR_gp = document.getElementById('HR_gp').value;
    const SBP_gp = document.getElementById('SBP_gp').value;
    const trau = document.getElementById('trau').value;
    const cvs = document.getElementById('cvs').value;
    const neu = document.getElementById('neu').value;
    const resp = document.getElementById('resp').value;
    const gastric = document.getElementById('gastric').value;
    const sepsis = document.getElementById('sepsis').value;
    const obs = document.getElementById('obs').value;
    const dis = document.getElementById('dis').value;

    const data = {
        platform,
        aircraft,
        patient,
        age_8gp,
        sex,
        t_reg,
        r_hosp_2gp,
        cri_1,
        cri_2,
        cri_3,
        cri_4,
        cri_5,
        cri_6,
        cri_7,
        cri_8,
        cri_9,
        cri_10,
        cri_11,
        cri_12,
        cri_13,
        cri_14,
        ev_1,
        ev_2,
        ev_3,
        GCS_gp,
        HR_gp,
        SBP_gp,
        trau,
        cvs,
        neu,
        resp,
        gastric,
        sepsis,
        obs,
        dis
    }

    postData('https://flask-api-rf-model.herokuapp.com/predict', data)
    .then(data=>{
        const result = data.result;
        console.log(data);
        console.log(result);
        console.log(predictType(result));
        document.getElementById('resultText').innerHTML=predictType(result);
    })

}