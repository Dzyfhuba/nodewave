import styles from './testimonies.module.css'

const data = [
  {
    text: `Buat aplikasi sama tim ini emang luar biasa dicarikan
    solusi yang paling murah supaya bisa segera mulai
    aplikasi PPOB saya. 2 minggu udah jadi hasilnya
    saya tinggal fokus di promosi! Terima kasih Nodewave.`,
    name: 'Ahmad Prasetyo'
  },
  {
    text: `Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave,
    ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami
    tinggal cerita aja lewat zoom maunya buat website seperti apa,
    langsung dibuatin dengan cepat sama Nodewave.`,
    name: 'Laras Ratnadewi'
  },
  {
    text: `Yang paling keren sih source codenya sekalian dikasih,
    pas pula bisa pakai Flutter, jadi gw ama cofounder bisa
    develop lagi fitur2 baru untuk startup gw.
    Thanks a lot Nodewave supportnya!!`,
    name: 'Yusuf Uwais'
  }
]

const Testimonies = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>
        Testimony
      </h1>
      <div className={styles.container}>
        {
          data.map((item, index) => (
            <div key={index} className={styles.cardBox}>
              <p>
                {item.text}
              </p>
              <p className={styles.name}>
                {item.name}
              </p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Testimonies