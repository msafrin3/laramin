<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('property_invitations', function (Blueprint $table) {
            $table->id();
            $table->string('token');
            $table->foreignId('property_id')->constrained('properties');
            $table->foreignId('property_unit_id')->constrained('property_units');
            $table->string('email');
            $table->enum('type', ['Owner', 'Tenant']);
            $table->enum('status', ['New', 'Completed'])->default('New');
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_invitations');
    }
};
