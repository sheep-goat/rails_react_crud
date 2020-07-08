class Api::BooksController < ApplicationController
  def index
    books = Book.all
    render json: books
  end

  def show
    book = Book.find(params[:id])
    render json: book
  end

  private

  def book_params
    params.permit(:title, :author, :publisher, :genre)
  end
end
