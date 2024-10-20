<template>
  <div class="comms-container">
    <h2>Comentarios</h2>
    <textarea
      v-model="nuevoComentario"
      placeholder="Añadir un comentario..."
    ></textarea>
    <button @click="enviarComentario">Enviar</button>

    <ul>
      <li v-for="(comentario, index) in comentarios" :key="index" class="gente-comentarios">
        <strong>{{ comentario.usuario }}:</strong> <br />
        <span>{{ comentario.mensaje }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      nuevoComentario: '',
      comentarios: [],
      usuarioPerfil: {},
      usuarioLogueado: {}
    };
  },
  created() {
    this.obtenerPerfilUsuario();
    this.obtenerUsuarioLogueado();
  },
  methods: {
    async obtenerPerfilUsuario() {
      const id = this.$route.params.id;
      try {
        const response = await axios.get(`http://localhost:3000/usuario/${id}`);
        this.usuarioPerfil = response.data;
        this.comentarios = this.usuarioPerfil.comentarios || [];  
      } catch (error) {
        console.error('Error al obtener el perfil:', error);
      }
    },

    obtenerUsuarioLogueado() {
      const usuario = localStorage.getItem('usuarioLogueado');
      if (usuario) {
        this.usuarioLogueado = JSON.parse(usuario);
      } else {
        console.error('No hay usuario logueado.');
      }
    },

    async enviarComentario() {
      if (this.nuevoComentario.trim() === '') {
        alert('El comentario no puede estar vacío');
        return;
      }

      
      const nuevoComentarioObj = {
        usuario: this.usuarioLogueado.usuario,  
        mensaje: this.nuevoComentario
      };


      this.comentarios.push(nuevoComentarioObj);
      this.usuarioPerfil.comentarios = this.comentarios;

      try {
        
        await axios.put(`http://localhost:3000/usuario/${this.usuarioPerfil.id}`, {
          ...this.usuarioPerfil 
        });

      
        this.nuevoComentario = '';
      } catch (error) {
        console.error('Error al enviar el comentario:', error);
      }
    }
  }
};
</script>


<style scoped>

.comms-container {
  margin-top: 50vh; 
  height: 400px;
  width: 300vw;
  max-width: 1300px;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  padding: 20px;
  overflow-y: auto; 
  margin-right: auto;
  border-radius: 40px;
  position: fixed ;
  left: 20%;
}

textarea {
  width: 65.5vw; 
  height: 4vw;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none; 
}

button {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #DCDCDC;
}

ul {
  list-style-type: none;
  padding: 0;
  max-width: 100%; 
}

.gente-comentarios {
  margin-top: 10px;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 100%; 
  word-wrap: break-word; 
}

.gente-comentarios strong {
  font-weight: bold;
}

.gente-comentarios span {
  display: block;
  margin-top: 5px;
}
</style>